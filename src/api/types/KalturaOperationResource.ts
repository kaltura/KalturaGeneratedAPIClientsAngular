
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaOperationAttributes } from './KalturaOperationAttributes';
import { KalturaContentResource, KalturaContentResourceArgs } from './KalturaContentResource';

export interface KalturaOperationResourceArgs  extends KalturaContentResourceArgs {
    resource? : KalturaContentResource;
	operationAttributes? : KalturaOperationAttributes[];
	assetParamsId? : number;
}


export class KalturaOperationResource extends KalturaContentResource {

    resource : KalturaContentResource;
	operationAttributes : KalturaOperationAttributes[];
	assetParamsId : number;

    constructor(data? : KalturaOperationResourceArgs)
    {
        super(data);
        if (typeof this.operationAttributes === 'undefined') this.operationAttributes = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaOperationResource' },
				resource : { type : 'o', subTypeConstructor : KalturaContentResource, subType : 'KalturaContentResource' },
				operationAttributes : { type : 'a', subTypeConstructor : KalturaOperationAttributes, subType : 'KalturaOperationAttributes' },
				assetParamsId : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaOperationResource',KalturaOperationResource);
