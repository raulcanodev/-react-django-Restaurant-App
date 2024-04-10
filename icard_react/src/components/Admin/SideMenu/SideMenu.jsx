import React from "react";
import "./SideMenu.scss";
import { Menu, Icon } from "semantic-ui-react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../../hooks";

export function SideMenu({ children }) {
	const { pathname } = useLocation();

	return (
		<div className="side-menu-admin">
			<MenuLeft pathname={pathname}></MenuLeft>
			<div className="content">{children}</div>
		</div>
	);
}

function MenuLeft({ pathname }) {
	const { auth } = useAuth();
	console.log(auth);
	return (
		<Menu fixed="left" borderless vertical className="side">
			<Menu.Item as={Link} to={"/admin"} active={pathname === "/admin"}>
				<Icon name="home" /> Orders
			</Menu.Item>

			<Menu.Item
				as={Link}
				to={"/admin/tables"}
				active={pathname === "/admin/tables"}>
				<Icon name="table" /> Tables
			</Menu.Item>

			<Menu.Item
				as={Link}
				to={"/admin/payments-history"}
				active={pathname === "/admin/payments-history"}>
				<Icon name="history" /> Payment History
			</Menu.Item>

			<Menu.Item
				as={Link}
				to={"/admin/categories"}
				active={pathname === "/admin/categories"}>
				<Icon name="folder" /> Categories
			</Menu.Item>

			<Menu.Item
				as={Link}
				to={"/admin/products"}
				active={pathname === "/admin/products"}>
				<Icon name="cart" /> Products
			</Menu.Item>

			{auth.me?.is_staff && (
				<Menu.Item
					as={Link}
					to={"/admin/users"}
					active={pathname === "/admin/users"}>
					<Icon name="users" /> Users
				</Menu.Item>
			)}
		</Menu>
	);
}
