import { movies } from '../data';
import MovieCard from '../components/MovieCard';
import MovieGallery from '../components/MovieGallery';

function Home() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold text-slate-800">🏠 Home</h1>
      <p className="mt-2 text-slate-500">ยินดีต้อนรับสู่ Home</p>
      <h2 className="mt-8 text-2xl font-bold text-slate-800">🎟 หนังแนะนำ</h2>
      <div className="mx-auto mt-8 max-w-5xl">

        {movies.slice(0, 3).map(m => (
          <MovieCard key={m.id} title={m.title} year={m.year} />
        ))}
        <h3 className="mt-8 text-2xl font-bold text-slate-800">🎟 หนังแนะนำ</h3>
        <MovieGallery />
      </div>

    </div>
  );
}

export default Home;