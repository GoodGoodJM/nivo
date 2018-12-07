/*
 * This file is part of the nivo project.
 *
 * Copyright 2016-present, Raphaël Benitte.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import * as React from 'react'
import * as PropTypes from 'prop-types'
import { Theme } from '@nivo/core'
import { LegendSvg } from './LegendSvg'
import {
    datumPropType,
    symbolPropTypes,
    interactivityPropTypes,
    legendEffectPropType,
    LegendAnchor,
    LegendDatum,
    LegendDirection,
    LegendItemDirection,
    LegendEffect,
    LegendPadding,
    LegendSymbolShapeProp,
    LegendMouseHandler,
} from '../props'
import { computeDimensions, computePositionFromAnchor } from '../compute'

export interface BoxLegendSvgProps {
    data: LegendDatum[]
    containerWidth: number
    containerHeight: number
    translateX?: number
    translateY?: number
    anchor: LegendAnchor
    direction: LegendDirection
    padding?: LegendPadding
    justify?: boolean
    itemsSpacing?: number
    itemWidth: number
    itemHeight: number
    itemDirection: LegendItemDirection
    itemTextColor?: string
    itemBackground?: string
    itemOpacity?: number
    symbolShape?: LegendSymbolShapeProp
    symbolSize?: number
    symbolSpacing?: number
    symbolBorderWidth?: number
    symbolBorderColor?: string
    onClick?: LegendMouseHandler
    onMouseEnter?: LegendMouseHandler
    onMouseLeave?: LegendMouseHandler
    effects?: LegendEffect[]
    theme: Theme
}

export const BoxLegendSvg: React.SFC<BoxLegendSvgProps> = ({
    data,
    containerWidth,
    containerHeight,
    translateX = 0,
    translateY = 0,
    anchor,
    direction,
    padding = 0,
    justify,
    itemsSpacing = 0,
    itemWidth,
    itemHeight,
    itemDirection,
    itemTextColor,
    itemBackground,
    itemOpacity,
    symbolShape,
    symbolSize,
    symbolSpacing,
    symbolBorderWidth,
    symbolBorderColor,
    onClick,
    onMouseEnter,
    onMouseLeave,
    effects,
    theme,
}) => {
    const { width, height } = computeDimensions({
        itemCount: data.length,
        itemsSpacing,
        itemWidth,
        itemHeight,
        direction,
        padding,
    })

    const { x, y } = computePositionFromAnchor({
        anchor,
        translateX,
        translateY,
        containerWidth,
        containerHeight,
        width,
        height,
    })

    return (
        <LegendSvg
            data={data}
            x={x}
            y={y}
            direction={direction}
            padding={padding}
            justify={justify}
            effects={effects}
            itemsSpacing={itemsSpacing}
            itemWidth={itemWidth}
            itemHeight={itemHeight}
            itemDirection={itemDirection}
            itemTextColor={itemTextColor}
            itemBackground={itemBackground}
            itemOpacity={itemOpacity}
            symbolShape={symbolShape}
            symbolSize={symbolSize}
            symbolSpacing={symbolSpacing}
            symbolBorderWidth={symbolBorderWidth}
            symbolBorderColor={symbolBorderColor}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            theme={theme}
        />
    )
}

BoxLegendSvg.propTypes = {
    data: PropTypes.arrayOf(datumPropType).isRequired as React.Requireable<LegendDatum[]>,
    containerWidth: PropTypes.number.isRequired,
    containerHeight: PropTypes.number.isRequired,
    translateX: PropTypes.number,
    translateY: PropTypes.number,
    anchor: PropTypes.oneOf([
        LegendAnchor.Top,
        LegendAnchor.TopRight,
        LegendAnchor.Right,
        LegendAnchor.BottomRight,
        LegendAnchor.Bottom,
        LegendAnchor.BottomLeft,
        LegendAnchor.Left,
        LegendAnchor.TopLeft,
        LegendAnchor.Center,
    ]).isRequired,
    direction: PropTypes.oneOf([LegendDirection.Row, LegendDirection.Column]).isRequired,
    padding: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.shape({
            top: PropTypes.number,
            right: PropTypes.number,
            bottom: PropTypes.number,
            left: PropTypes.number,
        }),
    ]),
    justify: PropTypes.bool,
    itemWidth: PropTypes.number.isRequired,
    itemHeight: PropTypes.number.isRequired,
    itemDirection: PropTypes.oneOf([
        LegendItemDirection.LeftToRight,
        LegendItemDirection.RightToLeft,
        LegendItemDirection.TopToBottom,
        LegendItemDirection.BottomToTop,
    ]),
    itemsSpacing: PropTypes.number,
    itemTextColor: PropTypes.string,
    itemBackground: PropTypes.string,
    itemOpacity: PropTypes.number,
    ...symbolPropTypes,
    ...interactivityPropTypes,
    effects: PropTypes.arrayOf(legendEffectPropType) as React.Validator<LegendEffect[]>,
    theme: PropTypes.object.isRequired as React.Requireable<Theme>,
}
