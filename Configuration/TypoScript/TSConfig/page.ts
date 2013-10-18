RTE {
	default {
		contentCSS = EXT:demo/Resources/Public/Css/rte.css

		proc {
			allowedClasses := addToList(label)
		}

		showButtons := addToList(big,small)

		buttons {
			textstyle {
				tags {
					small.allowedClasses = author
				}
			}
			link {
				properties {
					class {
						allowedClasses := addToList(label)
					}
				}
			}
		}
	}

	classes {
		author {
			name = LLL:EXT:demo/Resources/Private/Language/Rte.xlf:author
			value = color: #cecece;
		}
	}
}