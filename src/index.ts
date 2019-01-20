import BaseButton from './BaseButton';
import ActionIconButton from './BaseButton/ActionIconButton';
import Button from './BaseButton/Button';
import IconButton from './BaseButton/IconButton';
import BaseFormLabel from './BaseFormLabel/BaseFormLabel';
import BaseHeading from './BaseHeading';
import BaseIcon from './BaseIcon';
import BaseInput from './BaseInput/BaseInput';
import BaseLabel from './BaseLabel';
import BaseTextArea from './BaseTextArea/BaseTextArea';
import BaseSelect from './MultiSelect/BaseSelect';
import ToggleButton from './ToggleButton/ToggleButton';
import ToggleElement from './ToggleButton/ToggleElement';
import { withUlightTheme } from './withUlightTheme';

import './shared-style.css';

const Select = withUlightTheme(BaseSelect);
const SelectOption = withUlightTheme(ToggleElement);
const TextArea = withUlightTheme(BaseTextArea);
const Input = withUlightTheme(BaseInput);

export {
    BaseButton,
    BaseLabel,
    BaseIcon,
    Input,
    BaseHeading,
    BaseFormLabel,
    Select,
    ToggleButton,
    SelectOption,
    withUlightTheme,
    TextArea,
    Button,
    IconButton,
    ActionIconButton
};

export * from './theme-context';
