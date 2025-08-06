const React = require("react");
const Layout = require("../layouts/Layout");

function NewView(props) {
    const token = props.token;

    return (
        <Layout token={token}>
            <div id="supplierContainerNew">
                <h1 id="supplierTitleNew">Add New Supplier</h1>
                <form id="supplierFormNew" action={`/suppliers?token=${token}`} method="post">
                    <label>
                        Supplier Name:
                        <input type="text" name="name" placeholder="Enter name here" />
                    </label>
                    <label>
                        Supplier Number:
                        <input type="tel" name="contact" placeholder="Enter phone number here" />
                    </label>
                    <label>
                        Supplier Email:
                        <input type="email" name="email" placeholder="Enter email here" />
                    </label>
                    <input className="supplierBtnAddNew" type="submit" value="Add Supplier" />
                </form>
                <a className="supplierReturnLinkNew" href={`/suppliers?token=${token}`}><button className="supplierReturnBtnNew">Go Back</button></a>
            </div>
        </Layout>
    );
}

module.exports = NewView;
