module.exports = async (req, res) => {
  res.setHeader('cache-control', 'no-cache');
  res.setHeader('content-type', 'text/event-stream;charset=UTF-8');

  let count = 0;

  setInterval(() => res.write(`data: ${JSON.stringify({message: ++count})}\n\n`), 1000);
};