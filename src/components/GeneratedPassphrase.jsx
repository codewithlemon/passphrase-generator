function GeneratedPassphrase({ newPassphrase }) {
  return (
    <div className="GeneratedPassphrase">
      <ul className="words-box">
        {newPassphrase.map((word, index) => (
          <li key={index}>{word}</li>
        ))}
      </ul>
    </div>
  )
}

export default GeneratedPassphrase
