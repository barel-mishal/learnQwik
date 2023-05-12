import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';



export default component$(() => {
  return (
    <>
    hI
    </>
  );
});

export const head: DocumentHead = {
  title: 'Qwik Voiting app',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
