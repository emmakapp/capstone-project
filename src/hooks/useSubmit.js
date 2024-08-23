import {useState} from "react";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));


const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (url, data) => {
    const random = Math.random();
    setLoading(true);
    try {
      await wait(2000);
      if (random < 0.5) {
        throw new Error("Something went wrong");
      }
      setResponse({
        type: 'success',
        message: `${data.firstname} ${data.lastname}, thank you for reserving a table for your party of ${data.guests} on ${data.date} at ${data.time} at Little Lemon. You will receive a confirmation email shortly.`,
      })
    } catch (error) {
      setResponse({
        type: 'error',
        message: 'Something went wrong, please try again or call us at 412-123-1234.',
      })
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, response, submit };
}

export default useSubmit;
