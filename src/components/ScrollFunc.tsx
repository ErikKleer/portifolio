const ScrollEndPage = () => {
  const scrollToBottomAndFocus = () => {
      window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth'
      });
      setTimeout(() => {
        const textareaField = document.getElementById('message');
        if (textareaField) {
          textareaField.focus();
        }
      }, 1000);
  };

  return (
    <a
      href="#"
      onClick={scrollToBottomAndFocus}
      className="underline font-bold text-white"
    >
      Entre em contato
    </a>
  );
};

export default ScrollEndPage;
