export default function Home(props) {
  return (
    <div>{props.data}</div>
  )
}

export const getStaticProps = async () => {
  const  res = await fetch('http://worldtimeapi.org/api/timezone/Europe/Moscow');
  const { utc_datetime } = await res.json();
  return {
    props: {
      data: utc_datetime
    },
    revalidate: 1,
  }
}
