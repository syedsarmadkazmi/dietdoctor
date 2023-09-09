export interface SearchResultsCardProps {
    showOptions: boolean
	title: string
	imageURL: string
	subTitle: React.ReactNode
}

export interface FiltersModalProps {
    title: string
	visible: boolean
	onClose: () => void
	selected: [string]
	onSelect: (id: string) => void
}

export interface NavHeaderProps {
    onBackPress?: () => void
	showBackButton: boolean
	title: string
}

export interface TextInputProps {
    onClear: () => void
	onFilter: () => void
    value: string
    isFilterOn: boolean
	onChangeText: (text) => void
	placeholder: string
	onSubmitEditing: () => void
}