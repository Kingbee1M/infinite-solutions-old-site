import Button from "./_ui/Button";

function NotFound() {
  return (
    <main className='flex flex-col items-center justify-center text-center space-y-6 my-10'>
      <h1 className='text-2xl lg:text-3xl font-semibold'>
        This page could not be found 😥
      </h1>
      <Button link="/" classname="p-5">Go back home</Button>
    </main>
  );
}

export default NotFound;
