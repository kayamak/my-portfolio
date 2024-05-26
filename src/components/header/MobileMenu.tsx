const MobileMenu: React.FC<{
	handleClick: any;
	linkClass: any;
	menuItems: any[];
}> = ({ handleClick, linkClass, menuItems }) => (
	<div className="md:hidden">
		<div className="mt-4 flex flex-col items-center space-y-4">
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
	</div>
);

export default MobileMenu;
