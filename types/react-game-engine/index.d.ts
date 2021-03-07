// Project: https://github.com/bberak/react-game-engine
// TypeScript Version: 3.5

declare module "react-game-engine" {
    import * as React from "react";

    interface DefaultRendererOptions {
        state: any;
        window: Window;
    }

    export interface GameEngineRenderer {
        (entities: Entities, window: Window): React.ReactNode;
    }

    export function DefaultRenderer(
        entities: Entities,
        window: Window,
    ): React.ReactNode;

    export class DefaultTimer {}

    interface TouchProcessorOptions {
        triggerPressEventBefore: number;
        triggerLongPressEventAfter: number;
        moveThreshold: number;
    }

    export function DefaultTouchProcessor(
        touchProcessorOptions?: TouchProcessorOptions,
    ): any;

    export interface TimeUpdate {
        current: number;
        delta: number;
        previous: number;
        previousDelta: number;
    }

    export interface BaseInput<T = Element> {
        name: string;
        payload: SyntheticEvent<T, Event>;
    }

    export interface MouseInput<T = Element> extends BaseInput {
        name:
            | "onClick"
            | "onDoubleClick"
            | "onContextMenu"
            | "onMouseDown"
            | "onMouseEnter"
            | "onMouseLeave"
            | "onMouseMove"
            | "onMouseOut"
            | "onMouseOver"
            | "onMouseUp";
        payload: MouseEvent<T>;
    }

    export interface DragInput<T = Element> extends BaseInput {
        name:
            | "onDrag"
            | "onDragEnd"
            | "onDragEnter"
            | "onDragExit"
            | "onDragLeave"
            | "onDragOver"
            | "onDragStart"
            | "onDrop";
        payload: DragEvent<T>;
    }

    export interface WheelInput<T = Element> extends BaseInput {
        name: "onWheel";
        payload: WheelEvent<T>;
    }

    export interface TouchInput<T = Element> extends BaseInput {
        name: "onTouchCancel" | "onTouchEnd" | "onTouchMove" | "onTouchStart";
        payload: TouchEvent<T>;
    }

    export interface KeyInput<T = Element> extends BaseInput {
        name: "onKeyDown" | "onKeyPress" | "onKeyUp";
        payload: KeyboardEvent<T>;
    }

    export type AllInput<T = Element> =
        | MouseInput<T>
        | DragInput<T>
        | WheelInput<T>
        | TouchInput<T>
        | KeyInput<T>;

    export type InputNames = AllInput["name"];

    export type Input<T = Element> = AllInput<T>[];

    export interface GameEngineUpdateEventOptionType {
        dispatch: (event: any) => void;
        events: Array<any>;
        window: Window;
        time: TimeUpdate;
        input: Input;
    }

    export interface Entity<R = React.ReactElement> {
        renderer: R;
        [key: string]: any;
    }

    export interface Entities<R = React.ReactElement> {
        [uniqueId: string]: Entity<R>;
    }

    export type GameEngineSystem = (
        entities: Entities,
        update: GameEngineUpdateEventOptionType,
    ) => any;

    export interface GameEngineProperties {
        systems?: any[];
        entities?: Entities | Promise<Entities>;
        renderer?: GameEngineRenderer;
        touchProcessor?: any;
        timer?: any;
        running?: boolean;
        onEvent?: any;
        /** An object containing styles for the root container */
        style?: React.CSSProperties;
        className?: string;
        children?: React.ReactNode;
    }

    export class GameEngine extends React.Component<GameEngineProperties> {}

    export type TouchEventType =
        | "start"
        | "end"
        | "move"
        | "press"
        | "long-press";

    export interface TouchEvent {
        event: {
            changedTouches: Array<TouchEvent>;
            identifier: number;
            locationX: number;
            locationY: number;
            pageX: number;
            pageY: number;
            target: number;
            timestamp: number;
            touches: Array<TouchEvent>;
        };
        id: number;
        type: TouchEventType;
        delta?: {
            locationX: number;
            locationY: number;
            pageX: number;
            pageY: number;
            timestamp: number;
        };
    }

    interface GameLoopUpdateEventOptionType {
        touches: TouchEvent[];
        window: Window;
        time: TimeUpdate;
    }

    export interface GameLoopProperties {
        touchProcessor?: any;
        timer?: any;
        running?: boolean;
        onUpdate?: (args: GameLoopUpdateEventOptionType) => void;
        /** An object containing styles for the root container */
        style?: React.CSSProperties;
        children?: React.ReactNode;
    }

    export class GameLoop extends React.Component<GameLoopProperties> {}
}
