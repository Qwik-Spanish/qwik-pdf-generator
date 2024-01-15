import { component$ } from '@builder.io/qwik';
import Image64 from './image-base64';

export interface FilmProps {
  imdbID: string;
  title: string;
  year: string;
  poster: string;
  available: boolean;
}

export const Table = component$<any>(({ data }) => {
  return (
    <div class='container'>
      {data.length === 0 ? (
        'There are no movies'
      ) : (
        <table class='table' id='testTable'>
          <thead>
            <tr>
              <th scope='col'>Poster</th>
              <th scope='col'>ID</th>
              <th scope='col'>Title</th>
              <th scope='col'>Year</th>
              <th scope='col'>Available</th>
            </tr>
          </thead>
          <tbody>
            {data.map((el: FilmProps) => (
              <tr key={el.imdbID}>
                <td>{el.poster ? <Image64 data={el.poster} /> : null}</td>
                <td>{el.imdbID}</td>
                <td>{el.title}</td>
                <td>{el.year}</td>
                <td>{el.available ? 'Yes' : 'No'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
});
