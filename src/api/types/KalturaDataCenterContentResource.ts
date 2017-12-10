
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaContentResource, KalturaContentResourceArgs } from './KalturaContentResource';

export interface KalturaDataCenterContentResourceArgs  extends KalturaContentResourceArgs {
    
}


export class KalturaDataCenterContentResource extends KalturaContentResource {

    

    constructor(data? : KalturaDataCenterContentResourceArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDataCenterContentResource' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDataCenterContentResource',KalturaDataCenterContentResource);
