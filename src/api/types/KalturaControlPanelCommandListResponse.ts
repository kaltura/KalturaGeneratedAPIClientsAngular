
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaControlPanelCommand } from './KalturaControlPanelCommand';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaControlPanelCommandListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaControlPanelCommandListResponse extends KalturaListResponse {

    readonly objects : KalturaControlPanelCommand[];

    constructor(data? : KalturaControlPanelCommandListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaControlPanelCommandListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaControlPanelCommand, subType : 'KalturaControlPanelCommand' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaControlPanelCommandListResponse',KalturaControlPanelCommandListResponse);
