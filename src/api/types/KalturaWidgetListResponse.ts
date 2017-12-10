
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaWidget } from './KalturaWidget';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaWidgetListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaWidgetListResponse extends KalturaListResponse {

    readonly objects : KalturaWidget[];

    constructor(data? : KalturaWidgetListResponseArgs)
    {
        super(data);
        if (typeof this.objects === 'undefined') this.objects = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaWidgetListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaWidget, subType : 'KalturaWidget' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaWidgetListResponse',KalturaWidgetListResponse);
