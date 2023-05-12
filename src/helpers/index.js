const checkFilter = (arr, value) => arr.find((item) => item.value === value);

export const filterTickets = (tickets, filters) => {
  const [all] = filters;
  const activeFilters = filters.filter((filter) => filter.checked);
  const ticketsCopy = JSON.parse(JSON.stringify(tickets));
  const result = [];

  ticketsCopy.forEach((ticket) => {
    const ticketStops = ticket.segments[0].stops.length;
    if (activeFilters.includes(all)) {
      result.push(ticket);
    } else if (checkFilter(activeFilters, ticketStops)) {
      result.push(ticket);
    }
  });
  return result;
};

export const sortTickets = (tickets, tabs) => {
  const ticketsCopy = JSON.parse(JSON.stringify(tickets));
  const [byPrice] = tabs;
  return byPrice.checked
    ? [...ticketsCopy].sort((first, second) => first.price - second.price)
    : [...ticketsCopy].sort((first, second) => first.segments[0].duration - second.segments[0].duration);
};
