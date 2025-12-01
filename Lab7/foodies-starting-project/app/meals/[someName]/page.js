export default function MealDetailsPage({ params }) {
  return (
    <main>
      <h1>Meal Details</h1>
      {/* Wyświetlenie parametru z URL, np. "spaghetti" */}
      <p>Slug: {params.someName}</p>
    </main>
  );
}