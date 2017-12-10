
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDataCenterContentResource } from './KalturaDataCenterContentResource';
import { KalturaOperationAttributes, KalturaOperationAttributesArgs } from './KalturaOperationAttributes';

export interface KalturaConcatAttributesArgs  extends KalturaOperationAttributesArgs {
    resource? : KalturaDataCenterContentResource;
}


export class KalturaConcatAttributes extends KalturaOperationAttributes {

    resource : KalturaDataCenterContentResource;

    constructor(data? : KalturaConcatAttributesArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaConcatAttributes' },
				resource : { type : 'o', subTypeConstructor : KalturaDataCenterContentResource, subType : 'KalturaDataCenterContentResource' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaConcatAttributes',KalturaConcatAttributes);
