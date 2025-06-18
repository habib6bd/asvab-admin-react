// app/api/proxy/route.ts

export const runtime = 'nodejs'; // Ensures you use the Node.js runtime to handle FormData

export async function POST(req: Request) {
  try {
    // Convert FormData to URL-encoded string
    const formData = await req.formData();
    const params = new URLSearchParams();
    for (const [key, value] of formData.entries()) {
      params.append(key, value.toString());
    }

    const response = await fetch('https://test-prep.asvab-tutoring.com/practice-test/asvab-api.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    });

    const data = await response.json();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Proxy error:', error);
    return new Response(JSON.stringify({ status: 'error', message: 'Proxy failed' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
