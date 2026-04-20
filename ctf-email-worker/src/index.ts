interface Env {
  RESEND_API_KEY: string;
}

const RECIPIENT_EMAIL = "cybertech@psu.edu.sa";
const SENDER_EMAIL = "ctf@shoug-tech.com";

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (request.method === "GET") {
      return new Response("CTF email worker is running");
    }

    if (request.method !== "POST") {
      return new Response("Method not allowed", { status: 405 });
    }

    try {
      const formData = await request.formData();

      const studentEmail = String(formData.get("studentEmail") || "").trim();
      const topic = String(formData.get("topic") || "").trim();
      const subject = String(formData.get("subject") || "").trim();
      const solution = String(formData.get("solution") || "").trim();
      const files = formData.getAll("attachments");

      if (!studentEmail || !topic || !subject || !solution) {
        return json({ success: false, error: "Missing required fields" }, 400);
      }

      const attachments: Array<{ filename: string; content: string }> = [];

      for (const item of files) {
        if (!(item instanceof File)) continue;

        const buffer = await item.arrayBuffer();
        attachments.push({
          filename: item.name,
          content: arrayBufferToBase64(buffer),
        });
      }

      const resendResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: `CTF Bot <${SENDER_EMAIL}>`,
          to: [RECIPIENT_EMAIL],
          reply_to: [studentEmail],
          subject,
          text: [
            `Student Email: ${studentEmail}`,
            `Topic: ${topic}`,
            "",
            "Solution:",
            solution,
          ].join("\n"),
          attachments,
        }),
      });

      const result = await resendResponse.json<any>();

      if (!resendResponse.ok) {
        return json(
          {
            success: false,
            error: result?.message || "Email failed",
            resend: result,
          },
          resendResponse.status
        );
      }

      return json({
        success: true,
        message: "Email sent successfully",
        resend: result,
      });
    } catch (error: any) {
      return json(
        {
          success: false,
          error: error?.message || "Internal error",
        },
        500
      );
    }
  },
};

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

function arrayBufferToBase64(buffer: ArrayBuffer): string {
  let binary = "";
  const bytes = new Uint8Array(buffer);
  const chunkSize = 0x8000;

  for (let i = 0; i < bytes.length; i += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(i, i + chunkSize));
  }

  return btoa(binary);
}