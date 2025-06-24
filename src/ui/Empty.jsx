import styled from "styled-components";

const NoBookings = styled.p`
  text-align: center;
  font-size: 1.8rem;
  margin: 2rem 0;
  padding: 15rem;
`;

function Empty({ resourceName }) {
  return <NoBookings>No {resourceName} available at the moment.</NoBookings>;
}

export default Empty;
