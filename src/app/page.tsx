import { Typography } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <Image
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>
            <Typography>
              Get started by editing <code>src/app/page.tsx</code>.
            </Typography>
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>
      </main>
      <footer></footer>
    </div>
  );
}
