import { render,screen } from "@testing-library/react"
import RestroratCard from "../RestroratCard";
import restcardmock from "../__test__/mocks/restcardmock.json";
import "@testing-library/jest-dom";

it("It should render restroatcard component with props data",() => {
    render(<RestroratCard restData={restcardmock}/>);
    const name = screen.getByText("Pizza Hut");
    expect(name).toBeInTheDocument();
});