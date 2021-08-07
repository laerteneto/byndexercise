
const selectors = {
    salesBanner: '#header a > img.img-responsive[title]'
}

class Header {
    /**
     * Acess the sales page by clicking on the banner in the header
     */
    accessSalesPage() {
        cy.get(selectors.salesBanner).click()
    }
}

export default Header