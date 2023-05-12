import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { useAuthSession } from './plugin@auth';



export default component$(() => {
  const session = useAuthSession();
  return (
    <>
    <span>Email: {session.value?.user?.email}</span>
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
