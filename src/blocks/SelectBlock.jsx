import {
    defaultBlockSchema,
    defaultProps,
} from "@blocknote/core";
import {
    BlockNoteView,
    useBlockNote,
    createReactBlockSpec,
    getDefaultReactSlashMenuItems,
} from "@blocknote/react";
import "@blocknote/core/style.css";
import { RiImage2Fill } from "react-icons/ri";

export default function CustomBlock() {
    // Creates a custom image block.
    const SelectBlock = createReactBlockSpec({
        type: "select",
        propSchema: {
            ...defaultProps,
            options: {
                type: "array",
                default: [
                    {
                        label: "Option 1",
                        value: "",
                    },
                ],
            },
            value: {
                type: "string",
                default: "",
            }
        },
        containsInlineContent: false,
        render: ({ block }) => (
            <div id="select-block">
                <select value={block.props.value}>
                    {block.props.options.map((option) => (
                        <option value={option.value}>{option.label}</option>
                    ))}
                </select>
            </div>
        ),
    });

    // The custom schema, which includes the default blocks and the custom image
    // block.
    const customSchema = {
        // Adds all default blocks.
        ...defaultBlockSchema,
        // Adds the custom image block.
        select: SelectBlock,
    };

    // Creates a slash menu item for inserting an image block.
    const insertSelect = {
        name: "Insert Select",
        execute: (editor) => {
            // const src = prompt("Enter image URL");
            // const alt = prompt("Enter image alt text");
            const options = [
                {
                    label: "Option 1",
                    value: "",
                },
            ];
            const value = "";
            editor.insertBlocks(
                [
                    {
                        type: "select",
                        props: {
                            options,
                            value
                        },
                    },
                ],
                editor.getTextCursorPosition().block,
                "after"
            );
        },
        aliases: ["select"],
        group: "Input",
        icon: <RiImage2Fill />,
        hint: "",
    };

    // Creates a new editor instance.
    const editor = useBlockNote({
        // Tells BlockNote which blocks to use.
        blockSchema: customSchema,
        slashMenuItems: [
            ...getDefaultReactSlashMenuItems(customSchema),
            insertSelect,
        ],
    });

    // Renders the editor instance using a React component.
    return <BlockNoteView editor={editor} theme={"light"} />;
}