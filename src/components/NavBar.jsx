import propTypes from 'prop-types';
import {useState} from 'react';
import {
	Navbar,
	NavbarBrand,
	NavbarMenuToggle,
	NavbarMenu,
	NavbarMenuItem,
	NavbarContent,
	NavbarItem,
	Link,
} from '@nextui-org/react';
import JacobLogo from './JacobLogo';

function NavBar({onVideoInteract, onVideoOpen, menuItemsMain}) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	return (
		<Navbar
			isBordered
			onMenuOpenChange={setIsMenuOpen}
			isMenuOpen={isMenuOpen}
		>
			{/* Navbar content for mobile screens */}
			<NavbarContent className='sm:hidden pr-3' justify='start'>
				<NavbarBrand>
					<JacobLogo />
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className='sm:hidden' justify='end'>
				<NavbarMenuToggle
					aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
				/>
			</NavbarContent>

			{/* Navbar content for desktop screens */}
			<NavbarContent className='hidden sm:flex gap-4' justify='end'>
				<NavbarBrand>
					<JacobLogo />
					<button onClick={() => {
						onVideoInteract();
						onVideoOpen();
					}}>
						<h2 className="text-xl">Bienvenido</h2>
					</button>
				</NavbarBrand>

				{menuItemsMain.map((item, index) => (
					<NavbarItem key={`${item}-${index}`}>
						<Link
							color='foreground'
							onClick={item.function}
							className='cursor-pointer'
						>
							{item.name}
						</Link>
					</NavbarItem>
				))}
			</NavbarContent>

			{/* Navbar content for mobile screens */}
			<NavbarMenu>
				{menuItemsMain.map((item, index) => (
					<NavbarMenuItem key={`${item}-${index}`}>
						<Link
							color='foreground'
							onClick={() => {
								item.function();
								setTimeout(() => {
									setIsMenuOpen(false);
								}, 1000);
							}}
							className='cursor-pointer'
						>
							{item.name}
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</Navbar>
	);
}

NavBar.propTypes = {
	menuItemsMain: propTypes.array,
	onVideoOpen: propTypes.func.isRequired,
	onVideoInteract: propTypes.func.isRequired,
};

export default NavBar;
