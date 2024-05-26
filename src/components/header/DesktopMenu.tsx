const DesktopMenu: React.FC<{
	handleClick: any;
	linkClass: any;
	menuItems: any[];
}> = ({ handleClick, linkClass, menuItems }) => (
	<div className="hidden items-center space-x-12 md:flex">
		{menuItems.map((item) => (
			<a
				key={item.section}
				className={linkClass(item.section)}
				onClick={(e) => handleClick(e, item.section)}
			>
				{item.label}
			</a>
		))}
	</div>
);

export default DesktopMenu;
