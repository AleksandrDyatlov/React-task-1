import React from 'react'
import Select, { components, PlaceholderProps } from 'react-select';
import './style.scss'

function Filter() {
	const optionsCategories = [
		{ value: 'category1', label: 'Category1' },
		{ value: 'category2', label: 'Category2' },
		{ value: 'category3', label: 'Category3' },
		{ value: 'category4', label: 'Category4' }
	]

	const optionsTags = [
		{ value: 'tag1', label: 'Tag1' },
		{ value: 'tag2', label: 'Tag2' },
		{ value: 'tag3', label: 'Tag3' },
		{ value: 'tag4', label: 'Tag4' }
	]

	const Placeholder = (props: PlaceholderProps) => {
		return <components.Placeholder {...props} />;
	};

	const selectStyles = {
		control: (base, state) => ({
			...base,
			borderColor: state.isFocused ? '#F2F2F2' : '#303033',
			boxShadow: state.isFocused ? 'none' : 'none',
			outline: state.isFocused ? 'none' : 'none',
			backgroundColor: '#303033',
			borderRadius: "10px",
			"&:hover": {
				borderColor: "#F2F2F2"
			}
		}),
		valueContainer: (base) => ({
			...base,
			paddingLeft: "21px",
			paddingRight: "5px",
		}),
		indicatorSeparator: (base) => ({
			...base,
			backgroundColor: "transparent"
		}),
		input: (base) => ({
			...base,
			fontSize: '16px',
			color: '#F2F2F2',
			fontWeight: 300,
			lineHeight: 2,
			paddingBottom: "7px",
			paddingTop: "7px",
		}),
		placeholder: (base) => ({
			...base,
			fontSize: '16px',
			color: '#F2F2F2',
			fontWeight: 300,
		}),
		singleValue: (base) => ({
			...base,
			color: '#F2F2F2'
		}),
		dropdownIndicator: (base) => ({
			...base,
			color: "inherit",
			"&:hover": {
				color: "inherit"
			}
		}),
		menu: (base) => ({
			...base,
			backgroundColor: "#303033",
			color: "#fff",
			margin: 0,
			borderRadius: "10px",
			overflow: "hidden",
		}),
		menuList: (base) => ({
			...base,
			padding: 0,
		}),
		option: (base) => ({
			...base,
			color: "#fff",
			backgroundColor: "#303033",
			paddingLeft: "21px",
			paddingRight: "21px",
			"&:hover": {
				color: "#303033",
				backgroundColor: "#F2F2F2",
			}
		}),
	}

	const SelectCategories = () => (
		<Select
			options={optionsCategories}
			components={{ Placeholder }}
			placeholder={'Categories'}
			styles={selectStyles}
		/>
	)

	const SelectTags = () => (
		<Select
			options={optionsTags}
			components={{ Placeholder }}
			placeholder={'Tags'}
			styles={selectStyles}
		/>
	)

	return (
		<div className="filter-bar">
			<div className="filter-col">
				<SelectCategories />
			</div>
			<div className="filter-col">
				<SelectTags />
			</div>
		</div>
	)
}

export default Filter