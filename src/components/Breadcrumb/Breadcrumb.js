import { NavLink } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import styled from "styled-components";
import MoveBack from "../MoveBack/MoveBack";

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  height: 90px;
  padding: 12px 36px;

  @media (max-width: 500px) {
    flex-direction: column;
  }

  div > span {
    &:after {
      content: " / ";
    }
  }
  a {
    color: #fff;
  }
`;

const pathById = { 1: "dir_1", 2: "dir_2", 3: "dir_3" };

const DynamicUserBreadcrumb = ({ match }) => (
  <span>{pathById[match.params.directoryCode]}</span>
);

const routes = [
  { path: "/directories", breadcrumb: "root" },
  { path: "/directories/:directoryCode", breadcrumb: DynamicUserBreadcrumb },
];

const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs(routes, { excludePaths: ["/"] });

  return (
    <NavWrapper>
      <div>
        {breadcrumbs.map(({ match, breadcrumb }) => (
          <span key={match.pathname}>
            <NavLink to={match.pathname}>{breadcrumb}</NavLink>
          </span>
        ))}
      </div>
      {breadcrumbs.length === 1 ? "" : <MoveBack />}
    </NavWrapper>
  );
};

export default Breadcrumbs;
