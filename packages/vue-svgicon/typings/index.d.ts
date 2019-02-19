import Vue from 'vue'
import { PluginFunction } from 'vue'

export interface PluginOptions {
    tagName?: string
    classPrefix?: string
    isStroke?: boolean
    defaultWidth?: string
    defaultHeight?: string
}

export interface Icon {
    width: number
    height: number
    viewBox: string
    data: string
    [key: string]: any
}

export const VueSvgIcon: {
    install: PluginFunction<PluginOptions>
}

export default VueSvgIcon