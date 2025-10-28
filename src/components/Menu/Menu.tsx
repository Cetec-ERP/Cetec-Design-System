import { menu, type MenuVariantProps } from '@styled-system/recipes';
import { Box, type BoxProps } from '../Box';
import { useState } from 'react';
import { Text } from '../Text';
import { Divider } from '../Divider';
import { Icon } from '../Icon';
import { CheckBox } from '../CheckBox';
import { Toggle } from '../Toggle';
import { Link } from '../Link';

export type MenuProps = Omit<BoxProps, keyof MenuVariantProps> &
  MenuVariantProps & {
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
        icon?: string;
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

export const Menu: React.FC<MenuProps> = ({
  menuSection,
  iconPlacement,
  variant,
  multiSelectType,
  onChange,
}) => {
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
  } = menu({
    iconPlacement,
  });
  const [selected, setSelected] = useState<string[]>([]);
  const [isChildren, setIsChildren] = useState([
    { menu: menuSection, parentLabel: null as string | null },
  ]);

  const current = isChildren[isChildren.length - 1];

  const handleSelect = (id: string) => {
    if (variant === 'single-select') {
      if(selected.includes(id)){
        setSelected([]);
        onChange?.(null);
      }
      else{
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
    <Box className={wrapper}>
      {isChildren.length > 1 && (
        <Text
          onClick={handleBack}
          className={parentLabel}
          textStyle={{ base: 'body-lg', md: 'body-md' }}
          color={{ base: 'slate.90', _dark: 'slate.0' }}
        >
          <Icon
            name="caret-left"
          />
          {current?.parentLabel || 'Back'}
        </Text>
      )}

      <Box
        data-anim={isChildren.length > 1 ? 'slide-left' : undefined}
        className={wrapperInner}
      >
        {current?.menu?.map((section) => (
          <Box key={section.id}>
            {section.title && (
              <Box className={sectionTitle}>
                <Text textStyle="body-xs">{section?.title}</Text>
              </Box>
            )}
            <Box>
              {section?.items?.map((item) => {
                const hasChildren = !!item.children?.length;
                const isSelected = selected.includes(item.id);
                const activateItem = () => {
                  if (item?.children) {
                    handleOpenSubmenu(item.children, item.label);
                  } else {
                    handleSelect(item.id);
                  }
                };
                return (
                  <Box
                    key={item?.id}
                    className={menuItem}
                    tabIndex={0}
                    disabled={item?.disabled}
                    aria-disabled={item?.disabled}
                    data-selected={isSelected}
                    onClick={activateItem}
                    onKeyDown={(e: { key: string; preventDefault: () => void; }) => {
                      if (e.key === ' ' || e.key === 'Spacebar' || e.key === 'Enter') {
                        e.preventDefault(); 
                        activateItem();
                      }
                    }}
                    role="button"
                    aria-pressed={isSelected}
                  >
                    {item?.icon && <Icon name={`${item?.icon}`} />}
                    {variant === 'multi-select' &&
                      multiSelectType === 'checkbox' && !section?.link && (
                        <CheckBox
                          checked={isSelected}
                          onChange={() => handleSelect(item.id)}
                        />
                      )}
                    {variant === 'multi-select' &&
                      multiSelectType === 'toggle' && !section?.link && (
                        <Toggle
                          checked={isSelected}
                          onChange={() => handleSelect(item.id)}
                        />
                      )}
                    {!section?.link && (
                      <Box>
                        <Text
                          textStyle={{ base: 'body-lg', md: 'body-md' }}
                          className={menuLabel}
                          color={{ base: 'slate.90', _dark: 'slate.0' }}
                        >
                          {item?.label}
                        </Text>
                        {item?.description && (
                          <Text textStyle="body-xs" className={menuDescription}>
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
                        {item?.label}{' '}
                        <Icon
                          name="arrow-square-out"
                        />
                      </Link>
                    )}
                    {hasChildren && (
                      <Box className={multiLevelIcon}>
                        <Icon
                          name="caret-right"
                        />
                      </Box>
                    )}
                  </Box>
                );
              })}
            </Box>
            {section?.divider && (
              <Box className={dividerSection}>
                <Divider color={{base: 'slate.10', _dark: 'slate.60'}}/>
              </Box>
            )}
            {section?.spacer && <Box className={spacerSection}></Box>}
          </Box>
        ))}
      </Box>
    </Box>
  );
  
};
