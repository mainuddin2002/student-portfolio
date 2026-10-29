import { useEffect } from "react";

export default function usePageTitle(title) {
  useEffect(() => {
    document.title = `${title} | Mujib Ashraf Mainuddin`;
  }, [title]);
}