import Head from "next/head";
import Button from "@material-tailwind/react/Button";
import { useDispatch, useSelector } from "react-redux";
import { signInAction } from "../reducks/users/actions";
import { useRouter } from "next/dist/client/router";

export default function Home() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const router = useRouter();

  console.log(selector.users);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>next.js & Redux</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p>test</p>
      {/* tailwind material test */}
      <Button color="lightBlue" ripple="light" onClick={() => router.push("/login")}>
        Button
      </Button>
    </div>
  );
}
