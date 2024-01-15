import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Table } from '~/components/app/table';
import generatePDF from '~/helpers/generate-pdf';
import { MOVIES_MOCK as movies } from '~/mock/film.mock';

export default component$(() => {
  const columnsPDF = [
    {
      poster: 'Poster',
      id: 'ID',
      title: 'Title',
      year: 'Year',
      available: 'Available',
    },
  ];
  return (
    <div>
      <div class='header'>
           <span>MOVIES REGISTRY</span>
        </div>
      <Table data={movies.Search} />
      <div class='row'>
        <button
          class='btn'
          onClick$={() =>
            generatePDF(
              movies.Search.map((m) => ({
                poster: m.poster,
                id: m.imdbID,
                title: m.title,
                year: m.year,
                available: m.available ? 'OK' : 'KO',
              })),
              columnsPDF,
              true
            )
          }
        >
          DOWNLOAD PDF MOVIES
        </button>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
