import { Dropdown } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";
import { useHistory } from "react-router";
import { useEffect, useState } from "react";
import { SearchParams } from "../../types";

export const SortDropdown = () => {
  const history = useHistory();
  const sortTypes = {
    [SearchParams.asc]: (
      <>
        Less Voted (A <ArrowRight /> Z)
      </>
    ),
    [SearchParams.desc]: (
      <>
        Most Voted (Z <ArrowRight /> A)
      </>
    ),
    [SearchParams.orderby]: "Order By",
  };

  // Sort query value is read from history and set into state as selected sort type.
  const params = new URLSearchParams(history.location.search);
  const sortParam = params.get("sort");

  // Selected state is to be used on active state of dropdown items.
  const [selected, setSelected] = useState(sortParam || SearchParams.orderby);

  // When dropdown gets click it changes selected sort.
  // It also pushes as a search parameter into history.
  const handleClickDropdown = (value: keyof typeof sortTypes) => {
    setSelected(value);
    history.push({ search: `?sort=${value}` });
  };

  return (
    <>
      <Dropdown data-testid="dropdown-wrapper" className="w-50 mt-4">
        <Dropdown.Toggle
          data-testid="dropdown-selected"
          className="w-100 border text-left d-flex align-items-center justify-content-between text-capitalize bg-transparent text-secondary"
        >
          {sortTypes[selected as keyof typeof sortTypes]}
        </Dropdown.Toggle>
        <Dropdown.Menu className="w-100">
          <Dropdown.Item
            data-testid="dropdown-item-orderby"
            active={SearchParams.orderby === selected}
            className="text-capitalize"
            onClick={() => handleClickDropdown(SearchParams.orderby)}
          >
            Order By
          </Dropdown.Item>

          <Dropdown.Item
            data-testid="dropdown-item-desc"
            active={SearchParams.desc === selected}
            className="text-capitalize"
            onClick={() => handleClickDropdown(SearchParams.desc)}
          >
            Most Voted (Z <ArrowRight /> A)
          </Dropdown.Item>
          <Dropdown.Item
            data-testid="dropdown-item-asc"
            active={SearchParams.asc === selected}
            className="text-capitalize"
            onClick={() => handleClickDropdown(SearchParams.asc)}
          >
            Less Voted (A <ArrowRight /> Z)
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};
