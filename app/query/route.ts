 import postgres from 'postgres';

 const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

 async function listInvoices() {
 	const data = await sql`
     SELECT invoices.amount, customers.name
    FROM invoices
     JOIN customers ON invoices.customer_id = customers.id
     WHERE invoices.amount = 666;
   `;

 	return data;
 }

 async function sample() {
  const data = await sql`
    SELECT 1
  `;

  return data;
}

export async function GET() {
  //return Response.json({
   // message:
      //'Uncomment this file and remove this line. You can delete this file when you are finished.',
  //});
   /*try {
   	return Response.json(await sample());
   } catch (error) {
   	return Response.json({ error }, { status: 500 });
   } */
     try {
      const response = await fetch('https://ep-black-queen-a569ho0p-pooler.us-east-2.aws.neon.tech');
      return Response.json(response);
      console.log('Fetch response:', response.status);
    } catch (err) {
      console.error('Fetch test error:', err);
    }
}
