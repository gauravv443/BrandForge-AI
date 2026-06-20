import { FaReact } from "react-icons/fa";

function StartupCard({
  item,
  copied,
  setCopied
}) {
  return (
    <div className="card">

      <h2>{item.name}</h2>

      <p>{item.tagline}</p>

      <a
        href={`https://www.namecheap.com/domains/registration/results/?domain=${item.domain}`}
        target="_blank"
        rel="noreferrer"
      >
        {item.domain}
      </a>

      <div className="btn-group">

        <button
          onClick={() => {
            navigator.clipboard.writeText(item.name);

            setCopied(item.name);

            setTimeout(() => {
              setCopied("");
            }, 2000);
          }}
        >
          Copy Name
        </button>

        <button
          onClick={() =>
            window.open(
              `https://www.namecheap.com/domains/registration/results/?domain=${item.domain}`,
              "_blank"
            )
          }
        >
          Check Domain
        </button>

      </div>

      {copied === item.name && (
        <p className="copied-msg">
          <FaReact /> Copied!
        </p>
      )}

    </div>
  );
}

export default StartupCard;