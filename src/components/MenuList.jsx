import MenuListItem from "./MenuListItem";

function MenuList() {
    const menuItems = [
        {
            title: 'Responsive Layout ',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
            path: 'images/second-menu-images/hammer.svg'
        },
        {
            title: 'Smart BEM Grid ',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
            path: 'images/second-menu-images/zigzag.svg'
        },
        {
            title: 'User Friendly',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
            path: 'images/second-menu-images/user.svg'
        },
        {
            title: 'Built on Bootstrap v4',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
            path: 'images/second-menu-images/built-on-bootstrap.svg'
        },
        {
            title: 'Built on Bootstrap v4',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
            path: 'images/second-menu-images/security.svg'
        },
        {
            title: 'Built on Bootstrap v4',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
            path: 'images/second-menu-images/design.svg'
        },

    ]
    return (
        <div className="second__main__menu">
            <div className="second__main__menu__text__block">
                <p className="header__content__title">Lorem ipsum dolor sit amet</p>
                <h1 className="main__title bold__title">The Loudest Noise Comes From The Electric Saas.</h1>
                <p className="base__main__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
            </div>
            <div className="second__main__menu__block">
                <div className="second__menu__list">

                    <div className="da">
                        <div className="inner__border">
                            {
                                menuItems.map(menuItem => (
                                    <MenuListItem item={menuItem} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MenuList;