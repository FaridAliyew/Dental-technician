import '../../style/sidebar.css'

function Sidebar({ selected, setSelected }) {


    const menus = [
        "Hero",
        "Services",
        "Craft",
        "Works",
        "Reviews",
        "Contact",
        "Footer",
    ];

    return (
        <aside className="dashboard-sidebar">

            <h2>Aurelia Admin</h2>

            {
                menus.map((menu) => (
                    <button
                        key={menu}
                        className={
                            selected === menu
                                ? "active"
                                : ""
                        }
                        onClick={() => setSelected(menu)}
                    >
                        {menu}
                    </button>
                ))
            }

        </aside>
    );
}

export default Sidebar;