import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Test page",
  description: "Page of tests",
};


function Test() {
  return (
    <div className='text-danger'>Test</div>
  )
}

export default Test