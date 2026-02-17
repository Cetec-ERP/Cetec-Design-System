import { useRef, useState } from 'react';
import { splitProps } from '~/utils/splitProps';
import { cx } from '@styled-system/css';
import { menu, type MenuVariantProps } from '@styled-system/recipes';
import { Box, type BoxProps } from '../Box';
import { Text } from '../Text';
import { Divider } from '../Divider';
import { Icon, type IconNamesList } from '../Icon';
import { CheckBox } from '../CheckBox';
import { Toggle } from '../Toggle';
import { Link } from '../Link';
import { Spinner } from '../Spinner';
import { useOnClose } from '~/utils/useOnClose';

export type MenuProps = Omit<BoxProps, keyof MenuVariantProps> &
  MenuVariantProps & {
    loading?: boolean;
    onClose?: () => void;
    menuSection: {
      id?: string;
      title?: string;
      divider?: boolean;
      spacer?: boolean;
      link?: boolean;
      items: {
        id: string;
        label: string;
        description?: string;
        value?: string;
        iconName?: string;
        children?: MenuProps['menuSection'];
        disabled?: boolean;
        href?: string;
      }[];
    }[];
    iconPlacement?: 'left' | 'right';
    variant?: 'single-select' | 'multi-select';
    multiSelectType?: 'checkbox' | 'toggle';
    onChange?: (selected: string[] | string | null) => void;
  };

/**
 * TODO: Update Menu component
 */
export const Menu = (props: MenuProps) => {
  const {
    loading,
    onClose,
    menuSection,
    iconPlacement,
    variant,
    multiSelectType,
    onChange,
    ...rest
  } = props;
  const [className, otherProps] = splitProps(rest);
  const {
    wrapper,
    wrapperInner,
    sectionTitle,
    menuItem,
    menuLabel,
    menuDescription,
    parentLabel,
    multiLevelIcon,
    dividerSection,
    spacerSection,
    iconSection,
    loaderContainer,
  } = menu({
    iconPlacement,
    multiSelectType,
  });
  const [selected, setSelected] = useState<string[]>([]);
  const [isChildren, setIsChildren] = useState([
    { menu: menuSection, parentLabel: null as string | null },
  ]);

  const current = isChildren[isChildren.length - 1];

  const menuRef = useRef<HTMLDivElement | null>(null);

  useOnClose(menuRef, onClose);

  const handleSelect = (id: string) => {
    if (variant === 'single-select') {
      if (selected.includes(id)) {
        setSelected([]);
        onChange?.(null);
      } else {
        setSelected([id]);
        onChange?.(id);
      }
    } else {
      setSelected((prev) =>
        prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
      );
      onChange?.(
        selected.includes(id)
          ? selected.filter((x) => x !== id)
          : [...selected, id],
      );
    }
  };

  const handleOpenSubmenu = (
    children: MenuProps['menuSection'],
    parentLabel: string,
  ) => {
    if (children)
      setIsChildren([...isChildren, { menu: children, parentLabel }]);
  };

  const handleBack = () => {
    setIsChildren(isChildren.slice(0, -1));
  };

  return (
    <Box
      className={cx(
        wrapper({ variant, hue, iconPosition, hasIcon }),
        className,
      )}
      {...otherProps}
      ref={menuRef}
    >
      {isChildren.length > 1 && (
        <Text
          onClick={handleBack}
          className={parentLabel}
          textStyle={{ base: 'body.lg', md: 'body.md' }}
          color="text"
        >
          <Icon name="caret-left" />
          {current?.parentLabel || 'Back'}
        </Text>
      )}

      <Box
        data-anim={isChildren.length > 1 ? 'slide-left' : undefined}
        className={wrapperInner}
      >
        {loading ? (
          <Box className={loaderContainer}>
            <Spinner size="md" />
          </Box>
        ) : (
          current?.menu?.map((section) => (
            <Box key={section.id}>
              {section.title && (
                <Box className={sectionTitle}>
                  <Text textStyle="body.xs">{section?.title}</Text>
                </Box>
              )}
              <Box>
                {section?.items?.map((item) => {
                  const hasChildren = !!item.children?.length;
                  const isSelected = selected.includes(item.id);
                  const isDisabled = !!item?.disabled;
                  const activateItem = () => {
                    if (isDisabled) return;
                    if (item?.children) {
                      handleOpenSubmenu(item.children, item.label);
                    } else {
                      handleSelect(item.id);
                    }
                  };
                  return (
                    <Box
                      color={{ base: 'slate.100', _dark: 'slate.90' }}
                      key={item?.id}
                      className={menuItem}
                      tabIndex={isDisabled ? -1 : 0}
                      disabled={item?.disabled}
                      aria-disabled={item?.disabled}
                      data-selected={isSelected}
                      onClick={activateItem}
                      onKeyDown={(e: {
                        key: string;
                        preventDefault: () => void;
                      }) => {
                        if (
                          e.key === ' ' ||
                          e.key === 'Spacebar' ||
                          e.key === 'Enter'
                        ) {
                          e.preventDefault();
                          activateItem();
                        }
                      }}
                      role="button"
                      aria-pressed={isSelected}
                    >
                      {(iconPlacement || item?.iconName) && (
                        <Box
                          className={iconSection}
                          color={{ base: 'slate.90', _dark: 'slate.0' }}
                        >
                          {item?.iconName && (
                            <Icon name={`${item?.iconName as IconNamesList}`} />
                          )}
                        </Box>
                      )}
                      {variant === 'multi-select' &&
                        multiSelectType === 'checkbox' &&
                        !section?.link && (
                          <CheckBox
                            name={item.id}
                            id={item.id}
                            checked={isSelected}
                            onChange={() => handleSelect(item.id)}
                          />
                        )}
                      {variant === 'multi-select' &&
                        multiSelectType === 'toggle' &&
                        !section?.link && (
                          <Toggle
                            name={item.id}
                            id={item.id}
                            checked={isSelected}
                            onChange={() => handleSelect(item.id)}
                          />
                        )}
                      {!section?.link && (
                        <Box>
                          <Text
                            textStyle={{ base: 'body.lg', md: 'body.md' }}
                            className={menuLabel}
                            color={{ base: 'slate.90', _dark: 'slate.5' }}
                          >
                            {item?.label}
                          </Text>
                          {item?.description && (
                            <Text
                              textStyle="body.xs"
                              className={menuDescription}
                            >
                              {item?.description}
                            </Text>
                          )}
                        </Box>
                      )}
                      {section?.link && (
                        <Link
                          href={`${item?.href}`}
                          color={{ base: 'slate.90', _dark: 'slate.0' }}
                        >
                          {item?.label} <Icon name="arrow-square-out" />
                        </Link>
                      )}
                      {hasChildren && (
                        <Box
                          className={multiLevelIcon}
                          color={{ base: 'slate.90', _dark: 'slate.0' }}
                        >
                          <Icon name="caret-right" />
                        </Box>
                      )}
                    </Box>
                  );
                })}
              </Box>
              {section?.divider && (
                <Box className={dividerSection}>
                  <Divider color="border" />
                </Box>
              )}
              {section?.spacer && <Box className={spacerSection}></Box>}
            </Box>
          ))
        )}
      </Box>
    </Box>
  );
};
