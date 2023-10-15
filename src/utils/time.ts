function secondsToMMSS(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const MM = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const SS =
    remainingSeconds < 10 ? `0${remainingSeconds}` : `${remainingSeconds}`;

  return `${MM}:${SS}`;
}

export { secondsToMMSS };
