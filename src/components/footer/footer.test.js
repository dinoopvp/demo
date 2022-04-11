import { render, screen } from "@testing-library/react"
import Footer from "./footer";
describe("Footer Component", () => {
    test("Renders footer component with current year in copyright", () => {
        render(<Footer />)
        const currentYear = new Date().getFullYear();
        const footerText = screen.getByText(`${currentYear}`, { exact: false });
        expect(footerText).toBeInTheDocument();
    })
})
