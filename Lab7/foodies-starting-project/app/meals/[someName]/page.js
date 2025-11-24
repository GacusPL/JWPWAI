export default function MealDetailsPage({ params }) {
    // params.someName będzie zawierać wartość z adresu URL (np. "pizza")
    return (
      <main>
        <h1>Meal Details</h1>
        <p>Slug: {params.someName}</p>
      </main>
    );
  }