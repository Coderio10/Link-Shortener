import { useState } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import "../css/navbar.css";
import Link from "./link";

function Linksection() {
  const [longurl, changelongURL] = useState(" ")
  const [shorturl, changeshortURL] = useState({})
  const [active, setActive] = useState(false)
  const [copy, setCopy] = useState(false)

  // The function to handle the submit function
  async function handleSubmit(e) {
 
    // Prevent reloading the page
    e.preventDefault()

    await fetch("https://api-ssl.bitly.com/v4/shorten", {
      method: "POST",
      mode: "cors",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_BITLY_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        long_url: longurl,
        domain: "bit.ly",
        group_guid: `${process.env.REACT_APP_GUID}`,
      })
    })
    .then((res) => res.json())
    .then((data) => {
      const new_link = data.link.replace("https://", "")
      fetch(
        `https://api-ssl.bitly.com/v4/bitlinks/${new_link}/qr?image_format=png`,
        {
          mode: "cors",
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_BITLY_TOKEN}`,
          },
        }
      )
        .then((response) => response.json())
        .then((result) => {
          changeshortURL(result)
          setActive(true)
        })
    })

    changelongURL(' ')
    console.log(shorturl)
  }

  const handleChange = (event) => {
    changelongURL(event.target.value)
    event.target.value = ""
  }

  return (
    <>
      <div className="Link">
        <h1>{longurl}</h1>
        <div className="whitesection"></div>
        <form className="Linksection" onSubmit={handleSubmit}>
          <input
            type="text"
            value={longurl}
            onChange={handleChange}
            placeholder="shorten a link here..."
          />
          <button type="submit">Shorten it!</button>
        </form>

        <div className="darksection"></div>
        { active && childComp }
      </div>
    </>
  );
}

export default Linksection;
