const React = require("react");
const Layout = require("../layouts/Layout");

function Edit(props) {
    const token = props.token;
    const { _id, name, contact, email } = props.supplier;

    return (
        <Layout token={token}>
            <div id="supplierContainerEdit">
                <h1 id="supplierTitleEdit">Edit Supplier</h1>
                <form id="supplierFormEdit" action={`/suppliers/${_id}?_method=PUT&token=${token}`} method="post">
                    <label>
                        Supplier Name: <br />
                        <input type="text" name="name" defaultValue={name} />
                    </label>
                    <label>
                        Supplier Number: <br />
                        <input type="tel" name="contact" defaultValue={contact} />
                    </label>
                    <label>
                        Supplier Email: <br />
                        <input type="email" name="email" defaultValue={email} />
                    </label>
                    <input className="supplierBtnEdit" type="submit" value="Change Supplier" />
                </form>
                <a className="supplierReturnLinkEdit" href={`/suppliers/${_id}?token=${token}`}> <button className="supplierReturnBtnEdit">Go Back</button></a>
            </div>
        </Layout>
    );
}

module.exports = Edit;
